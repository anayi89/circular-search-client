import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"

// Define form validation schema
const loginSchema = {
  email: String(),
  password: String()
}

const Authenticate = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Demo login function - in a real app, this would connect to an auth service
  const handleLogin = async () => {
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log("Login attempt with:", values)
      
      // Demo credentials check - replace with real authentication
      if (values.email === "user@example.com" && values.password === "password123") {
        // Success
        toast.success("Login successful!")
        navigate("/")
      } else {
        // Failed login
        toast.error("Invalid email or password")
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex flex-col">
      <div className="container max-w-md mx-auto px-4 py-8 flex-grow flex flex-col justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <div className="text-center mb-8">
            <p className="bg-white text-gray-500 mt-2">Sign in to your account</p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="bg-white grid grid-cols-2 gap-3">
              <button variant="outline" className="search-result-text h-11 px-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2">
                <FontAwesomeIcon className="transparent-bg mr-2 h-4 w-4" icon={faGoogle} />
                Google
              </button>
              <button variant="outline" className="search-result-text h-11 px-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2">
                <FontAwesomeIcon className="transparent-bg mr-2 h-4 w-4" icon={faFacebook} />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authenticate