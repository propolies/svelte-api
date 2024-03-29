import { Result } from "./result.js"

export const createClientRouter = <Router extends object>(props: string[] = []): Router => {
  const fn = function(){ return props } as Router
  
  return new Proxy(fn, {
    get: (_, prop: string) => {
      return createClientRouter<Router>([...props, prop])
    },
    apply: async (target, _, args) => {
      // @ts-ignore
      const path: string[] = target()
      const promise = fetch(`/svelte-api?api=${path.join(".")}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(args[0] ?? null)
      }).then(res => res.json())
      return new Result(await promise)
    }
  })
}