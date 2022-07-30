import { ComponentPropsWithRef } from "react";

export function Button(props: ComponentPropsWithRef<'button'>) {
  return <button className="p-1.5 bg-cyan-500 border border-cyan-700" {...props}/>
}
