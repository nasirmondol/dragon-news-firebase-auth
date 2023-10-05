import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="bg-[#D72050] w-40 h-8 text-white">Breaking News</button>
            <Marquee className="text-green-400" pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;