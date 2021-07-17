import Image from 'next/image';

export default function Curriculum() {
    return (
        <>
            <h2>Curriculum</h2>
            <Image src="/images/logo.png" alt="Next.js" width="100px" height="100px" />
            <ul>
                <li>Getting started with CNA app</li>
                <li>Creating static pages</li>
                <li>Linking pages</li>
                <li>Working with images</li>
            </ul>
        </>
    );
}
