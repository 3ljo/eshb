interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
    text?: string;
    delay?: number;
}

const SingleTeamV1 = ({ member }: { member: DataType }) => {
    const { thumb, name, designation, text, delay } = member;

    return (
        <>
            <div className="team-member-box" data-aos="fade-up" data-aos-delay={delay}>
                <div className="img-box">
                    <img src={`/assets/images/${thumb}`} alt={name} />
                </div>
                <div className="content">
                    <span className="name">{name}</span>
                    <span className="designation">{designation}</span>
                    <div className="shape"><span /></div>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;
