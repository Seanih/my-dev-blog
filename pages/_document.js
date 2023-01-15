import Document, { Html, Head, Main, NextScript } from 'next/document';

// APPLY FONTS AND STYLES TO <body> and entire app
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* add global fonts here */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
