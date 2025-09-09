


import payload from "payload"
import config from "./payload.config"

const start = async () => {
  await payload.init({
    config, // use imported config directly
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })
}

start()



