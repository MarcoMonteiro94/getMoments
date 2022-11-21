function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="spinner-border m-12 inline-block h-8 w-8 animate-spin rounded-full border-4 text-rose-600"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
