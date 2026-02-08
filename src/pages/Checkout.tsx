import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, Building2, CheckCircle2, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = {
  Kenya: [
    { id: "mpesa", name: "M-Pesa", icon: Smartphone, description: "Pay with M-Pesa mobile money" },
    { id: "airtel", name: "Airtel Money", icon: Smartphone, description: "Pay with Airtel Money" },
    { id: "card", name: "Visa/Mastercard", icon: CreditCard, description: "Pay with credit or debit card" },
    { id: "bank", name: "Bank Transfer", icon: Building2, description: "Direct bank transfer" },
  ],
  Uganda: [
    { id: "mtn", name: "MTN Mobile Money", icon: Smartphone, description: "Pay with MTN Mobile Money" },
    { id: "airtel", name: "Airtel Money", icon: Smartphone, description: "Pay with Airtel Money" },
    { id: "card", name: "Visa/Mastercard", icon: CreditCard, description: "Pay with credit or debit card" },
  ],
  Burundi: [
    { id: "lumicash", name: "Lumicash", icon: Smartphone, description: "Pay with Lumicash" },
    { id: "ecocash", name: "EcoCash", icon: Smartphone, description: "Pay with EcoCash" },
    { id: "bank", name: "Bank Transfer", icon: Building2, description: "Direct bank transfer" },
  ],
  Congo: [
    { id: "orange", name: "Orange Money", icon: Smartphone, description: "Pay with Orange Money" },
    { id: "vodacom", name: "Vodacom M-Pesa", icon: Smartphone, description: "Pay with Vodacom M-Pesa" },
    { id: "bank", name: "Bank Transfer", icon: Building2, description: "Direct bank transfer" },
  ],
};

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState("Kenya");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // TODO: Integrate with backend API
    toast({
      title: "Order Placed Successfully!",
      description: `Your order of KSh ${total.toLocaleString()} has been received.`,
    });
    
    clearCart();
    setTimeout(() => navigate("/"), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl mb-4">Your cart is empty</h1>
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-body text-sm tracking-wide uppercase">Back</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-bold ${
                      step >= s ? "bg-gold-gradient text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 ${step > s ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="luxury-card"
              >
                <h2 className="font-display text-3xl font-semibold mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body mb-2">Country *</label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary"
                      >
                        <option value="Kenya">Kenya</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Congo">DR Congo</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-gold-gradient text-primary-foreground font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Payment Method */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="luxury-card"
              >
                <h2 className="font-display text-3xl font-semibold mb-6">Payment Method</h2>
                <p className="text-muted-foreground font-body mb-6">Select your preferred payment method for {country}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {paymentMethods[country as keyof typeof paymentMethods].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-6 border-2 rounded-sm text-left transition-all ${
                        paymentMethod === method.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <method.icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-lg font-semibold mb-1">{method.name}</h3>
                          <p className="text-sm text-muted-foreground font-body">{method.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border border-border text-foreground font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!paymentMethod}
                    className="flex-1 py-4 bg-gold-gradient text-primary-foreground font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    Review Order
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review & Confirm */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="luxury-card"
              >
                <h2 className="font-display text-3xl font-semibold mb-6">Review Your Order</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3">Shipping Details</h3>
                    <div className="text-sm font-body space-y-1 text-muted-foreground">
                      <p>{formData.fullName}</p>
                      <p>{formData.email}</p>
                      <p>{formData.phone}</p>
                      <p>{formData.address}</p>
                      <p>{formData.city}, {country}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3">Payment Method</h3>
                    <p className="text-sm font-body text-muted-foreground">
                      {paymentMethods[country as keyof typeof paymentMethods].find(m => m.id === paymentMethod)?.name}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-4 border border-border text-foreground font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-secondary transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-4 bg-gold-gradient text-primary-foreground font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="luxury-card sticky top-24">
              <h3 className="font-display text-2xl font-semibold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 pb-4 border-b border-border/50">
                    <div className="flex-1">
                      <h4 className="font-display text-sm font-semibold mb-1">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground font-body">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-body text-sm font-semibold">
                      KSh {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>KSh {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary">{total >= 5000 ? "FREE" : "KSh 500"}</span>
                </div>
                <div className="flex justify-between font-display text-xl font-semibold pt-3 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">KSh {(total >= 5000 ? total : total + 500).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
