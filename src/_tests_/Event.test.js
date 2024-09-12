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

});