import { redirect } from 'next/navigation'

import { getCurrentOrg } from '@/auth/auth'
import { Button } from '@/components/ui/button'
import { shutdownOrganization } from '@/http/shutdown-organization'

export function ShutdownOrganizationButton() {
  async function shutdownOrganizationAction() {
    'use server'

    const currentOrg = getCurrentOrg()

    await shutdownOrganization({ org: currentOrg! })

    redirect('/')
  }

  return (
    <form action={shutdownOrganizationAction}>
      <Button
        type="submit"
        variant="destructive"
        className="mt-5 w-28"
        size="sm"
      >
        Shutdown
      </Button>
    </form>
  )
}
