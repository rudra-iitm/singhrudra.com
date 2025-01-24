import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GetInTouch() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} className="mt-10 bg-slate-950 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white" variant="outline"> Get in touch </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
