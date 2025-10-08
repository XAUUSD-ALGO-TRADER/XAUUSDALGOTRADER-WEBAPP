// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Link, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";
// import { api } from "@/lib/api";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     country: "",
//     mobile: ""
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Validation
//     if (formData.password !== formData.confirmPassword) {
//       toast({
//         title: "Error",
//         description: "Passwords do not match",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (formData.password.length < 6) {
//       toast({
//         title: "Error",
//         description: "Password must be at least 6 characters",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await api.register({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         country: formData.country,
//         mobile: formData.mobile
//       });

//       toast({
//         title: "Success",
//         description: response.message,
//       });

//       // Redirect to login page after successful registration
//       navigate('/login');
      
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         toast({
//           title: "Registration Failed",
//           description: error.message || "An error occurred during registration",
//           variant: "destructive",
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-6">
//       <div className="w-full max-w-md">
//         <div className="mb-6">
//           <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Home
//           </Link>
//         </div>
        
//         <Card className="bg-card/50 backdrop-blur-sm border-border/50">
//           <CardHeader className="text-center">
//             <CardTitle className="text-2xl font-bold gold-text">Create Account</CardTitle>
//             <CardDescription>
//               Join our trading community and start your journey
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={(e) => handleChange("name", e.target.value)}
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email Address</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={(e) => handleChange("email", e.target.value)}
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Create a password"
//                   value={formData.password}
//                   onChange={(e) => handleChange("password", e.target.value)}
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword">Confirm Password</Label>
//                 <Input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={(e) => handleChange("confirmPassword", e.target.value)}
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="country">Country</Label>
//                 <Select 
//                   onValueChange={(value) => handleChange("country", value)}
//                   disabled={isLoading}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select your country" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="us">United States</SelectItem>
//                     <SelectItem value="uk">United Kingdom</SelectItem>
//                     <SelectItem value="ca">Canada</SelectItem>
//                     <SelectItem value="au">Australia</SelectItem>
//                     <SelectItem value="in">India</SelectItem>
//                     <SelectItem value="de">Germany</SelectItem>
//                     <SelectItem value="fr">France</SelectItem>
//                     <SelectItem value="jp">Japan</SelectItem>
//                     <SelectItem value="sg">Singapore</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="mobile">Mobile Number</Label>
//                 <Input
//                   id="mobile"
//                   type="tel"
//                   placeholder="Enter your mobile number"
//                   value={formData.mobile}
//                   onChange={(e) => handleChange("mobile", e.target.value)}
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               <Button 
//                 type="submit" 
//                 className="w-full premium-button"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Creating Account..." : "Create Account"}
//               </Button>

//               <div className="text-center text-sm text-muted-foreground">
//                 Already have an account?{" "}


//                 <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
//                   Sign in
//                 </Link>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/api";

interface BrokerAccount {
  id: string;
  brokerName: string;
  accountNumber: string;
  accountType: string;
}

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    mobile: ""
  });

  const [brokerAccounts, setBrokerAccounts] = useState<BrokerAccount[]>([
    { id: "1", brokerName: "", accountNumber: "", accountType: "" }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Mobile number validation regex (international format)
  const mobileRegex = /^[+]?[1-9]\d{1,14}$/;

  // Password strength validation
  const validatePassword = (password: string): string[] => {
    const issues = [];
    if (password.length < 8) issues.push("at least 8 characters");
    if (!/[A-Z]/.test(password)) issues.push("one uppercase letter");
    if (!/[a-z]/.test(password)) issues.push("one lowercase letter");
    if (!/\d/.test(password)) issues.push("one number");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) issues.push("one special character");
    return issues;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Basic field validation
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile.replace(/[\s-()]/g, ''))) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    if (!formData.country) newErrors.country = "Country selection is required";

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordIssues = validatePassword(formData.password);
      if (passwordIssues.length > 0) {
        newErrors.password = `Password must contain ${passwordIssues.join(", ")}`;
      }
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Broker accounts validation
    const validBrokerAccounts = brokerAccounts.filter(account => 
      account.brokerName.trim() || account.accountNumber.trim() || account.accountType.trim()
    );

    if (validBrokerAccounts.length === 0) {
      newErrors.brokerAccounts = "At least one broker account is required";
    } else {
      validBrokerAccounts.forEach((account, index) => {
        if (!account.brokerName.trim()) {
          newErrors[`brokerName_${account.id}`] = "Broker name is required";
        }
        if (!account.accountNumber.trim()) {
          newErrors[`accountNumber_${account.id}`] = "Account number is required";
        } else if (!/^[A-Za-z0-9]+$/.test(account.accountNumber.trim())) {
          newErrors[`accountNumber_${account.id}`] = "Account number should contain only letters and numbers";
        }
        if (!account.accountType.trim()) {
          newErrors[`accountType_${account.id}`] = "Account type is required";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors and try again",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Filter out empty broker accounts
      const validBrokerAccounts = brokerAccounts.filter(account => 
        account.brokerName.trim() && account.accountNumber.trim() && account.accountType.trim()
      );

      const response = await api.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        country: formData.country,
        mobile: formData.mobile,
        brokerAccounts: validBrokerAccounts.map(({ id, ...account }) => account)
      });

      toast({
        title: "Success",
        description: response.message,
      });

      navigate('/login');

    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Registration Failed",
          description: error.message || "An error occurred during registration",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBrokerAccountChange = (id: string, field: keyof Omit<BrokerAccount, 'id'>, value: string) => {
    setBrokerAccounts(prev => 
      prev.map(account => 
        account.id === id ? { ...account, [field]: value } : account
      )
    );
    // Clear errors when user starts typing
    const errorKey = `${field}_${id}`;
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: '' }));
    }
    if (errors.brokerAccounts) {
      setErrors(prev => ({ ...prev, brokerAccounts: '' }));
    }
  };

  const addBrokerAccount = () => {
    const newId = Date.now().toString();
    setBrokerAccounts(prev => [...prev, { id: newId, brokerName: "", accountNumber: "", accountType: "" }]);
  };

  const removeBrokerAccount = (id: string) => {
    if (brokerAccounts.length > 1) {
      setBrokerAccounts(prev => prev.filter(account => account.id !== id));
      // Clear errors for removed account
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`brokerName_${id}`];
        delete newErrors[`accountNumber_${id}`];
        delete newErrors[`accountType_${id}`];
        return newErrors;
      });
    }
  };

  const accountTypes = [
    "Savings",
    "Trading",
    "Demat",
    "Current",
    "Investment",
    "Commodity",
    "Currency",
    "Derivatives"
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold gold-text">Create Account</CardTitle>
            <CardDescription>
              Join our trading community and start your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b pb-2">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      disabled={isLoading}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      disabled={isLoading}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                      disabled={isLoading}
                      className={errors.mobile ? "border-red-500" : ""}
                    />
                    {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select 
                      onValueChange={(value) => handleChange("country", value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="sg">Singapore</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      disabled={isLoading}
                      className={errors.password ? "border-red-500" : ""}
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange("confirmPassword", e.target.value)}
                      disabled={isLoading}
                      className={errors.confirmPassword ? "border-red-500" : ""}
                    />
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              {/* Broker Accounts Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <h3 className="text-lg font-semibold text-foreground">Broker Accounts *</h3>
                  <Button
                    type="button"
                    onClick={addBrokerAccount}
                    disabled={isLoading}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Account
                  </Button>
                </div>

                {errors.brokerAccounts && <p className="text-sm text-red-500">{errors.brokerAccounts}</p>}

                {brokerAccounts.map((account, index) => (
                  <Card key={account.id} className="p-4 bg-muted/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-foreground">Account {index + 1}</h4>
                      {brokerAccounts.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeBrokerAccount(account.id)}
                          disabled={isLoading}
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="space-y-2">
                        <Label>Broker Name *</Label>
                        <Input
                          placeholder="e.g., Zerodha, Upstox"
                          value={account.brokerName}
                          onChange={(e) => handleBrokerAccountChange(account.id, "brokerName", e.target.value)}
                          disabled={isLoading}
                          className={errors[`brokerName_${account.id}`] ? "border-red-500" : ""}
                        />
                        {errors[`brokerName_${account.id}`] && (
                          <p className="text-sm text-red-500">{errors[`brokerName_${account.id}`]}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>Account Number *</Label>
                        <Input
                          placeholder="Enter account number"
                          value={account.accountNumber}
                          onChange={(e) => handleBrokerAccountChange(account.id, "accountNumber", e.target.value)}
                          disabled={isLoading}
                          className={errors[`accountNumber_${account.id}`] ? "border-red-500" : ""}
                        />
                        {errors[`accountNumber_${account.id}`] && (
                          <p className="text-sm text-red-500">{errors[`accountNumber_${account.id}`]}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>Account Type *</Label>
                        <Select 
                          onValueChange={(value) => handleBrokerAccountChange(account.id, "accountType", value)}
                          disabled={isLoading}
                        >
                          <SelectTrigger className={errors[`accountType_${account.id}`] ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {accountTypes.map(type => (
                              <SelectItem key={type} value={type.toLowerCase()}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors[`accountType_${account.id}`] && (
                          <p className="text-sm text-red-500">{errors[`accountType_${account.id}`]}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button 
                type="submit" 
                className="w-full premium-button"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;