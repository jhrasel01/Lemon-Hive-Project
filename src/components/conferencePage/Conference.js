import { useEffect, useState } from "react";
import { Container, H2, P } from "../UI";

// img
import axios from "axios";
import { FadeLoader } from "react-spinners";
import TabContent from "./TabContent";

export default function Conference({ slagId }) {
  const [conference, setConference] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.react-finland.fi/graphql",
          {
            query: `
            query ConferenceById($id: ID!) {
              conference(id: $id) {
                name
                sponsors {
                  name
                  about
                  image {
                    url
                    title
                  }
                }
                speakers{
                  name
                  about
                  social{
                    twitter
                    linkedin
                    facebook
                    dribble
                  }
                  image {
                    url
                    title
                  }
                }
                schedules{
                  day
                  intervals{
                    begin
                    end
                    title
                  }
                  
                }
                organizers{
                  name
                  about
                  image {
                    url
                    title
                  }
                }
              }
            }
          `,
            variables: {
              id: slagId, // Pass slagId as a variable
            },
          }
        );

        const { data, errors } = response.data;

        console.log("data", data);

        if (errors) {
          setError(errors[0].message);
        } else {
          setConference(data.conference); // Set conference data
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slagId]); // Add slagId to the dependency array to trigger useEffect on change

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className="mt-40 my-20">
        <Container>
          {/* content */}
          <div className="">
            {/* heading */}
            <div className="">
              <H2 name="Conference info" className="text-secondary-color" />
              <P
                name="Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum."
                className="text-custom-gray-color mt-2"
              />
            </div>

            {/* tabs */}

            {loading ? (
              <div className="h-40 flex items-center justify-center">
                <FadeLoader color="#111D5E" />
              </div>
            ) : (
              <TabContent conference={conference} />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
