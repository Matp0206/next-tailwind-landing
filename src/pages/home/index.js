import React from 'react'
import Layout from '../../layouts'
import IntroSection from './IntroSection'
import AboutSection from './AboutSection'
import InvestmentSection from './InvestmentSection'
import IdeasSection from './IdeasSection'
import ContactSection from './ContactSection'
export default function Home() {
	return (
		<Layout fullWidth={true}>
			<IntroSection />
			<AboutSection />
			<InvestmentSection />
			<IdeasSection />
			<ContactSection />
		</Layout>
	)
}
