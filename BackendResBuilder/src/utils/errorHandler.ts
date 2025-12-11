export function getError(error: unknown):{cause: Error|string} {
  const normalizeError= error instanceof Error? error: String(error)
  return {cause: normalizeError}
}