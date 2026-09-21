"use client";

import { useState } from "react";
import { toast } from "react-toastify";

interface FormData {
	name: string;
	email: string;
	phone: string;
	zipCode: string;
	message: string;
}

const ContactForm = () => {
	const [form, setForm] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		zipCode: "",
		message: "",
	});

	const isValidEmail = (email: string): boolean => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const isValidPhone = (phone: string): boolean => {
		const digits = phone.replace(/\D/g, "");
		return digits.length >= 10 && digits.length <= 15;
	};

	const isValidZipCode = (zipCode: string): boolean => {
		return /^\d{5}(-\d{4})?$/.test(zipCode.trim());
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name.trim()) {
			return toast.error("Name field is required!");
		}

		if (!form.email.trim()) {
			return toast.error("Email field is required!");
		}

		if (!isValidEmail(form.email)) {
			return toast.error("Please enter a valid email address!");
		}

		if (!form.phone.trim()) {
			return toast.error("Phone field is required!");
		}

		if (!isValidPhone(form.phone)) {
			return toast.error("Please enter a valid phone number!");
		}

		if (!form.zipCode.trim()) {
			return toast.error("ZIP Code field is required!");
		}

		if (!isValidZipCode(form.zipCode)) {
			return toast.error("Please enter a valid ZIP Code!");
		}

		if (!form.message.trim()) {
			return toast.error("Message field is required!");
		}

		const apiKey = process.env.NEXT_PUBLIC_API_KEY;

		if (!apiKey) {
			return toast.error(
				"Contact form is temporarily unavailable. Please call us instead."
			);
		}

		const formData = new FormData();

		formData.append("access_key", apiKey);
		formData.append("subject", "New Turf Installation Quote Request");
		formData.append("from_name", "LA Turf Installers Website");

		formData.append("name", form.name);
		formData.append("email", form.email);
		formData.append("phone", form.phone);
		formData.append("zip_code", form.zipCode);
		formData.append("message", form.message);

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const result = await res.json();

			if (res.ok && result.success) {
				toast.success(
					"Thank you! Your quote request has been sent successfully."
				);

				setForm({
					name: "",
					email: "",
					phone: "",
					zipCode: "",
					message: "",
				});
			} else {
				toast.error(
					result.message || "Failed to send your request. Please try again."
				);
			}
		} catch (error) {
			toast.error(
				"Network error. Please try again or call (747) 379-9772."
			);
		}
	};

	return (
		<form
			method="POST"
			className="row cs_gap_y_24"
			id="turf-quote-form"
			onSubmit={handleSubmit}
			aria-label="Los Angeles artificial turf installation quote request"
		>
			<div className="col-sm-6">
				<label className="visually-hidden" htmlFor="contact-name">
					Name
				</label>

				<input
					id="contact-name"
					type="text"
					name="name"
					className="cs_form_field"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
					autoComplete="name"
					required
				/>
			</div>

			<div className="col-sm-6">
				<label className="visually-hidden" htmlFor="contact-email">
					Email
				</label>

				<input
					id="contact-email"
					type="email"
					name="email"
					className="cs_form_field"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
					autoComplete="email"
					required
				/>
			</div>

			<div className="col-sm-6">
				<label className="visually-hidden" htmlFor="contact-phone">
					Phone
				</label>

				<input
					id="contact-phone"
					type="tel"
					name="phone"
					className="cs_form_field"
					placeholder="Phone"
					value={form.phone}
					onChange={handleChange}
					autoComplete="tel"
					inputMode="tel"
					required
				/>
			</div>

			<div className="col-sm-6">
				<label className="visually-hidden" htmlFor="contact-zip-code">
					ZIP Code
				</label>

				<input
					id="contact-zip-code"
					type="text"
					name="zipCode"
					className="cs_form_field"
					placeholder="ZIP Code"
					value={form.zipCode}
					onChange={handleChange}
					autoComplete="postal-code"
					inputMode="numeric"
					maxLength={10}
					required
				/>
			</div>

			<div className="col-lg-12">
				<label className="visually-hidden" htmlFor="contact-message">
					Tell us about your artificial turf project
				</label>

				<textarea
					id="contact-message"
					className="cs_form_field"
					name="message"
					placeholder="Tell us about your turf project"
					rows={5}
					value={form.message}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="col-lg-12">
				<button
					className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
					type="submit"
					aria-label="Submit artificial turf installation quote request"
				>
					<span>Request Free Quote</span>
				</button>

				<div
					id="cs_result"
					className="cs_heading_color"
					aria-live="polite"
				/>
			</div>
		</form>
	);
};

export default ContactForm;