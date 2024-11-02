import { render, screen } from "@testing-library/react";
import MapComponent from "./MapComponent";
import { MapContainer } from "react-leaflet";

jest.mock("react-leaflet", () => ({
  MapContainer: jest.fn(({ children }) => <div>{children}</div>),
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: () => <div data-testid="marker" />,
}));

describe("MapComponent", () => {
  it("should render map with correct center and zoom", () => {
    render(<MapComponent />);

    expect(screen.getByTestId("tile-layer")).toBeInTheDocument();
    expect(screen.getByTestId("marker")).toBeInTheDocument();

    expect(MapContainer).toHaveBeenCalledWith(
      expect.objectContaining({
        center: [48.60265, 22.28147],
        zoom: 18,
      }),
      expect.anything()
    );
  });
});
