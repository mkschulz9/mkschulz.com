import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import salvador_collage from '../../assets/Salvador.png'
import lemonade from '../../assets/lemonade.webp'
import cs from '../../assets/computer_science_ai.webp'

export const AboutMe: React.FC = () => {
    return (
        <Stack direction="row"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center'
            }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 230 }}
                    image={cs}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Passion for Computer Science & AI
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Fun fact: I began college as a business major. After my first semester, I knew it
                        was not the right fit, so I switched to computer science, and the rest is history.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Now, as I complete my M.S. in Computer Science specializing in AI, I have developed a
                        strong passion for this field, and I am constantly seeking opportunities to apply the
                        concepts I learn in innovative ways that can solve real-world problems. My journey from a
                        business major to a tech enthusiast underscores my adaptability and eagerness to embrace
                        complex challenges, fueling my ambition to work, lead, and innovate in this dynamic field.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 230 }}
                    image={lemonade}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Entrepreneurial Spirit
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        From a young age, I have always been driven by business! You would likely
                        find me running a lemonade stand on the sidewalk or pitching my lawnmowing
                        services door to door in my neighborhood.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        These early ventures taught me the
                        value of persistence and the importance of consistently pursuing my goals, no
                        matter the obstacles. Fast-forward to today, and I still carry that same passion.
                        I dream of building an innovative, inspiring company that can positively influence others.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 230 }}
                    image={salvador_collage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        World Explorer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        I love traveling! Over the Summer of 2023, I had the opportunity to visit El
                        Salvador. I went zip-lining, hiked volcanoes, swam in volcanic lakes, and even
                        tried surfing for the first time.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Surfing is a lot harder than it looks, but
                        embracing this challenge taught me resilience and the importance of stepping
                        out of my comfort zone. I value traveling and appreciate the diverse perspectives
                        and experiences it provides!
                    </Typography>
                </CardContent>
            </Card>
        </Stack >

    );
};
