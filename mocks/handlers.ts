import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.post('api/login', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(200, 'Mocked status'),
      ctx.json({
        success : true
      }),
    )
  }),
)

worker.start()