
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center">
            <p className="text-yellow-600 m-2 uppercase">---{subHeading}---</p>
            <h3 className="text-3xl border-y-4 border-base-300 py-4 mb-2 uppercase">{heading}</h3>

        </div>
    );
};

export default SectionTitle;