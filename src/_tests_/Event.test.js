import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import mockData from "../mock-data";


describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });
  beforeEach(() => {
    EventComponent = render(<Event event={mockData[0]} />);
  });

  test("Creates event title", () => {
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
  });

  test("creates event location", () => {
    expect(
      EventComponent.queryByText(mockData[0].location)
    ).toBeInTheDocument();
  });

  test("Start time", () => {
    expect(
      EventComponent.queryByText(mockData[0].start?.dateTime)
    ).toBeInTheDocument();
  });

  test("End time", () => {
    expect(
      EventComponent.queryByText(mockData[0].end?.dateTime)
    ).toBeInTheDocument();
  });

  test("Button text", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.container.querySelector('.details');
    expect (eventDetails).not.toBeInTheDocument;
  });

  test("show details after user clicks on button 'Show Details'", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button);
    const details = EventComponent.container.querySelector('.details');
    expect (details).toBeInTheDocument;
  });

  test("hide details after use clicks on button 'Hide details'", async () => {
    const user = userEvent.setup();
    let button = EventComponent.queryByText('Show Details');
    await user.click(button);
    let details = EventComponent.container.querySelector('.details');
    expect (details).toBeInTheDocument;

    button = EventComponent.queryByText('Hide Details');
    await user.click(button);
    details = EventComponent.container.querySelector('.details');
    expect (details).not.toBeInTheDocument;
  });
});
