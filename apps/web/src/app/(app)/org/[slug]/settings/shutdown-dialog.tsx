import { XCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { ShutdownOrganizationButton } from './shutdown-organization-button'

export function ShutdownDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="mt-5 w-56">
          <XCircle className="mr-2 size-4" />
          Shutdown organization
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription className="pt-2">
            This action cannot be undone.
          </DialogDescription>

          <ShutdownOrganizationButton />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
