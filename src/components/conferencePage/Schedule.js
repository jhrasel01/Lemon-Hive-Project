import { H4, H5, H6, List, ListItem } from "../UI";

export default function Schedule({ schedules }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {schedules?.map((schedule) => {
          // Parse the date string to get the day of the week and the formatted date
          const parsedDate = new Date(schedule.day);
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = parsedDate.toLocaleDateString("en-US", options);

          return (
            <div
              key={schedule.name}
              className="bg-white tab:py-6 p-5 tab:px-10 rounded-md shadow gap-3 tab:gap-10"
            >
              {/* title */}
              <div className="w-full flex items-center justify-between tab:pr-5">
                <H4
                  name={formattedDate} // Display the formatted date
                  className="text-secondary-color !font-bold"
                />
                <H6
                  name={parsedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                  })} // Display the day of the week
                  className="text-secondary-color"
                />
              </div>

              <List className="mt-5 flex flex-col gap-5">
                {schedule.intervals.map((interval, index) => (
                  <ListItem key={index}>
                    <H5
                      name={`Duration: ${interval.begin}-${interval.end}`}
                      className="text-secondary-color"
                    />
                    <div className="flex items-center gap-3 pl-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-secondary-color"></span>
                      <H5
                        name={
                          interval.title ? interval.title : "No title provided"
                        }
                        className="text-secondary-color"
                      />
                    </div>
                  </ListItem>
                ))}
              </List>
            </div>
          );
        })}
      </div>
    </>
  );
}
