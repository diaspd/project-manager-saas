import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div className="max-w-52 space-y-2">
        <div className="flex flex-col justify-center gap-2">
          <Label>Nome</Label>
          <Input placeholder="Name" />
        </div>

        <Separator />
        <Button>Sign In</Button>
      </div>
    </div>
  )
}
