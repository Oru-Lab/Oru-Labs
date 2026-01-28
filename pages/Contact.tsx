
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const mailtoLink = `mailto:helloorulabs@gmail.com?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Hello Ọrụ Labs,\n\n\n${formData.message}\n\nBest,\n${formData.name}\n`
      )}`;
      
      window.location.href = mailtoLink;
      
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow py-20 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">Let's Build.</h1>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-md">
              Whether you're a developer wanting to contribute, a team looking for UaaS, or interested in a partnership, we're ready to talk.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Location</h4>
                <p className="text-lg">2B General Diriyai lane, Port Harcourt, Rivers State</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Email</h4>
                <p className="text-lg">helloorulabs@gmail.com</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Network</h4>
                <p className="text-lg">Part of Borderless Dev Hub</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white/5 border border-white/10 p-5 md:p-16">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-white transition-colors outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-white transition-colors outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-white transition-colors outline-none resize-none"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>
              <div className="space-y-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Request'}
                </button>
                {submitted && (
                  <p className="text-center text-green-400 text-sm">Message Composed! Check your email client.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
