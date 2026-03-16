// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p style={{ maxWidth: "480px", margin: "1.5rem auto 0", textAlign: "center", lineHeight: 1.6 }}>
          Welcome to Pocket Heist — the app where mundane office life meets
          covert ops. Plan sneaky missions, recruit unsuspecting colleagues, and
          pull off harmless heists that&apos;ll make the 9-to-5 way more interesting.
          Ready to cause some chaos?
        </p>
      </div>
    </div>
  )
}
