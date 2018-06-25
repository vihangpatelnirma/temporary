const websiteSchema = {
	"@context": "http://schema.org",
	"@type": "WebSite",
	"name" : "Natural Clinic, MD",
	"url": "http://http://www.naturalclinicmd.com/"
}

const addressSchema = {
	"@context": {
		"@vocab": "http://schema.org/",
	},
	"@graph": [
		{
			"@id": "http://www.naturalclinicmd.com",
			"@type": "LocalBusiness",
			name: "Natural Clinic MD",
			url: "http://www.naturalclinicmd.com",
			logo: "http://www.naturalclinicmd.com/images/logo.png",
			sameAs: ["https://www.facebook.com/NaturalClinicMD", "https://twitter.com/indiandanceform"],
			address: {
				"@type": "PostalAddress",
				streetAddress: "4766 Rowan Rd",
				addressLocality: "New Port Richey",
				addressRegion: "New Port Richey",
				postalCode: "34653",
				telephone: "727-753-8861",
			},
			image: "http://www.naturalclinicmd.com/images/logo.png",
			priceRange : "$150 - $165",
			telephone: "727-753-8861"
		},
		{
			"@type": "LocalBusiness",
			parentOrganization: {
				name: "Natural Clinic MD",
			},
			name: "Natural Clinic MD",
			address: {
				"@type": "PostalAddress",
				streetAddress: "4766 Rowan Rd",
				addressLocality: "New Port Richey",
				addressRegion: "New Port Richey",
				postalCode: "34653",
				telephone: "727-753-8861",
			},
			openingHours: ["Mo-Fr 08:00-18:00", "Sa 10:00-16:00"],
			image: "http://www.naturalclinicmd.com/images/logo.png",
			priceRange : "$150 - $165",
			hasmap:
				"https://www.google.co.in/maps/place/Natural+Clinic+MD+%7C+FREE+Phone+Consultation+%7C+Medical+Marijuana+Doctor+%7C+Physician/@28.228647,-82.690336,17z/data=!3m1!4b1!4m5!3m4!1s0x88c29109c0da0d15:0xe4309777d6b2a333!8m2!3d28.228647!4d-82.690336?hl=en",
		},
		{
			"@type": "LocalBusiness",
			parentOrganization: {
				name: "Natural Clinic MD",
			},
			name: "Natural Clinic MD",
			address: {
				"@type": "PostalAddress",
				streetAddress: "577 Barnes Blvd #400",
				addressRegion: "Rockledge",
				postalCode: "32955",
				telephone: "321-405-2090",
			},
			openingHours: ["Mo-Fr 08:00-18:00", "Sa 10:00-16:00"],
			image: "http://www.naturalclinicmd.com/images/logo.png",
			priceRange : "$150 - $165",
			hasmap:
				"https://www.google.co.in/maps/place/577+Barnes+Blvd,+Rockledge,+FL+32955,+USA/@28.2941081,-80.722718,17z/data=!4m13!1m7!3m6!1s0x88de03d863cbde97:0xd5eaa0d67da1e33e!2s577+Barnes+Blvd,+Rockledge,+FL+32955,+USA!3b1!8m2!3d28.2941081!4d-80.7205293!3m4!1s0x88de03d863cbde97:0xd5eaa0d67da1e33e!8m2!3d28.2941081!4d-80.7205293?hl=en",
		},
	],
}

const customerCare = {
	"@context": "http://schema.org",
	"@type": "Organization",
	url: "http://www.naturalclinicmd.com",
	logo: "http://www.naturalclinicmd.com/images/logo.png",
	contactPoint: [
		{
			"@type": "ContactPoint",
			telephone: "+1-727-753-8861",
			contactType: "customer service",
			areaServed: ["US"],
			availableLanguage: ["English"],
		},
		{
			"@type": "ContactPoint",
			telephone: "+1-321-405-2090",
			contactType: "customer service",
			areaServed: ["US"],
			availableLanguage: ["English"],
		},
	],
}

const socialProfile = {
	"@context": "http://schema.org",
	"@type": "Person",
	name: "Tanmay Patel",
	url: "http://www.naturalclinicmd.com",
	sameAs: [
		"https://www.facebook.com/NaturalClinicMD",
		"https://twitter.com/indiandanceform",
		"https://www.linkedin.com/company-beta/24426776",
	],
}

const seoData = {
	"/": {
		title: "Jalpa Dance Academy",
		keywords:
			"Dance Academy, Indian Dances, Bharatnatyam , Chicago Dance Academy, Bollywood Dances, Indian Traditional Dances, Chicago Indian Traditional Dances",
		description:
			"Dance Academy, Indian Dances, Bharatnatyam , Chicago Dance Academy, Bollywood Dances, Indian Traditional Dances, Chicago Indian Traditional Dances",
	},	
	addressSchema: addressSchema,
}

module.exports = {
	tags: path => seoData[path] || seoData["/"],
	addressSchema,
	customerCare,
	socialProfile,
	websiteSchema
}
