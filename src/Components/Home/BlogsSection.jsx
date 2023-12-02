import { Blogs } from "../../../public/BlogsData";

const BlogsSection = () => {
  return (
    <div className="mt-32 container mx-auto">
      <h4 className="text-secondary font-semibold text-[24px] pb-[32px]">
        Our recent blogs
      </h4>

      <div className=" grid grid-cols-3">
        {Blogs.slice(0, 3).map(
          ({ date, title, details, cover_photo, tags }, index) => {
            return (
              <div className={index + 1 === 1 ? "col-span-2 " : ""} key={title}>
                <div
                  className={
                    index + 1 === 2 ? "flex flex-col " : "flex flex-row"
                  }
                >
                  <img src={cover_photo} alt="" />
                  <div>
                    <span className="text-primary text-sm font-semibold">
                      {date}
                    </span>
                    <h5 className="text-secondary text-[18px] font-semibold">
                      {title}
                    </h5>
                    <p className="text-secondary-500">{details}</p>
                    <div className=" space-x-1">
                      {tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default BlogsSection;
