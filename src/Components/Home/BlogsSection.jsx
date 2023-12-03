import { Blogs } from "../../../public/BlogsData";

const BlogsSection = () => {
  const colors = ["#C11574", "#026AA2", "#a92198"];

  return (
    <div className="mt-16 sm:mt-20 md:mt-24 pb-[80px] container mx-auto px-2 md:px-0">
      <h4 className="text-secondary font-semibold text-center xs:text-left text-[24px] pb-[42px] md:pb-[32px]">
        Our recent blogs
      </h4>

      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6">
        {Blogs.slice(0, 3).map(
          ({ date, title, details, cover_photo, tags }, index) => {
            return (
              <div
                className={
                  index + 1 === 2
                    ? "h-full row-span-2 w-[300px] xs:w-full"
                    : "w-[300px] xs:w-full"
                }
                key={title}
              >
                <div
                  className={
                    index + 1 === 2
                      ? "flex flex-col sm:flex-row md:flex-col gap-3 "
                      : "flex flex-col sm:flex-row gap-6 items-start"
                  }
                >
                  <img
                    className="w-[320px] h-[200px] md:w-fit md:h-auto"
                    src={cover_photo}
                    alt=""
                  />
                  <div
                    className={
                      index + 1 === 2 ? "flex flex-col gap-3 " : " space-y-2"
                    }
                  >
                    <span className="text-primary text-sm font-semibold">
                      {date}
                    </span>
                    <h5
                      className={`text-secondary font-semibold ${
                        index + 1 === 2 ? "text-[24px]" : "text-[18px]"
                      }`}
                    >
                      {title}
                    </h5>
                    <p className="text-secondary-500">{details.slice(0, 77)}</p>
                    <div className="space-x-2">
                      {tags.map((tag, index) => (
                        <span
                          style={{
                            color: colors[index % colors.length],
                          }}
                          className="px-2 py-1 rounded-lg bg-gray-100/70 text-sm"
                          key={index}
                        >
                          {tag}
                        </span>
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
