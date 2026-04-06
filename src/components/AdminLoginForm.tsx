"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setError("Invalid credentials.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card rts__card no-border radius-6">
              <div className="card-body p-4">
                <h4 className="mb-3">Sign in</h4>
                <p className="text-muted mb-4">Use your staff username and password.</p>

                <form className="d-flex flex-column gap-3" onSubmit={onSubmit}>
                  <div>
                    <label htmlFor="staff-username" className="mb-2 d-block">
                      Username
                    </label>
                    <input
                      id="staff-username"
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="staff-password" className="mb-2 d-block">
                      Password
                    </label>
                    <input
                      id="staff-password"
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>

                  {error && <p className="text-danger mb-0">{error}</p>}

                  <button
                    type="submit"
                    className="theme-btn btn-style fill no-border"
                    disabled={isLoading}
                  >
                    <span>{isLoading ? "Signing in..." : "Sign In"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
