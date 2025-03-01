import { AnimatePresence, motion } from "framer-motion"

const Carousel = () => {
    const images = [
        'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVldGluZ3N8ZW58MHx8MHx8fDA%3D',

        'https://images.unsplash.com/photo-1561489396-888724a1543d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZmVyZW5jZXN8ZW58MHx8MHx8fDA%3D',

        'https://images.unsplash.com/photo-1559060680-36abfac01944?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFydGllc3xlbnwwfHwwfHx8MA%3D%3D',

        'https://plus.unsplash.com/premium_photo-1670884128477-a34439142795?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D',

        'https://plus.unsplash.com/premium_photo-1677110758877-bbe4f0075f1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fybml2YWxzfGVufDB8fDB8fHww',

        'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww',

        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZmVyZW5jZXN8ZW58MHx8MHx8fDA%3D',

        'https://plus.unsplash.com/premium_photo-1679547203075-0e38c2bc51cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbmZlcmVuY2VzfGVufDB8fDB8fHww',
    ]


    return (
        <div className="overflow-hidden w-full">
            <AnimatePresence>
                <motion.div
                    animate={{ x: ['0%', '-200%'] }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    className="flex gap-6">
                    {[...images, ...images].map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-60 h-50 object-cover rounded-xl"
                            whileHover={{ scale: 0.9, rotate: 2 }}
                            transition={{ type: 'keyframes', stiffness: 300 }}
                        />

                    ))}

                </motion.div>
            </AnimatePresence>

        </div>
    )
}

export default Carousel
