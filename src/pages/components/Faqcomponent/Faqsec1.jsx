import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Faqsec1 = () => {
	const faqContent = [
		{
			question: "How can I partner my liquor or vape store with Pegasus?",
			answer:
				"If you would like your liquor or vape store to be available with Pegasus, please email our team with your store's name, address, and contact information. We will reach out to you as soon as we can. We look forward to working with you in the future!",
		},
		{
			question:
				"Where can I give my delivery driver instructions for delivery?",
			answer:
				"When you place an order and fill in your address, you can specify any instructions to assist the delivery driver. Because these products have age limit requirements the drivers will need to see an ID upon delivery.",
		},
		{
			question: "How do I track my delivery and what's the ETA?",
			answer:
				"Once an order has been placed, you will be able to follow along with the delivery driver and view a map that displays your delivery driver's location as well as your own.",
		},
		{
			question: "What makes Pegasus different?",
			answer:
				"Unlike our competitors, Pegasus delivers E-cig/vape products as well as alcohol products. Making it a one-stop shop for your ordering needs.",
		},
		{
			question: "Is Pegasus available in my area?",
			answer:
				"Pegasus is currently available in select cities in North Texas. We currently serve Allen, McKinney, Plano, and Frisco. However, we have plans of expanding and will be in a city near you soon!",
		},
		{
			question:
				"Can I combine orders for Alcohol products and E-cig/Vape products?",
			answer:
				"Yes, you can place orders for both alcohol and E-cig/Vape products simultaneously. This may increase order time but will not significantly impact ETA.  ",
		},
		{
			question: "What times does Pegasus deliver?",
			answer:
				"In accordance with state law and our vendors, Liquor/ Alcohol sales cannot be placed after 8:30 pm. However, Ecig/Vape products can be delivered through 12 am midnight as long as there is an available vendor.",
		},
	];
	return (
		<>
			<section className='sec faq_pg_sec1'>
				<div className='container'>
					<div className='inner_wrap'>
						<h2>Frequently Asked Questions?</h2>
						<div className='acc_wrap'>
							<Collapse accordion>
								{faqContent.map((val, index) => {
									return (
										<Panel
											header={val.question}
											key={index}>
											<p>{val.answer}</p>
										</Panel>
									);
								})}
							</Collapse>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faqsec1;
