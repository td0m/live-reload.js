// github.com/td0m/live-reload.js
async function getStartTime() {
	const res = await fetch("/health")
	const body = await res.json()
	return body.startedAt
}

async function loop() {
	const initial = await getStartTime()
	setInterval(async () => {
		const uptime = await getStartTime()
		if (uptime !== initial) window.location.reload()
	}, 200);
}

loop()
