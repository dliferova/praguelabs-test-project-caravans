import React, {useState, useMemo} from "react";
import VehicleCard from "../../ui/vehicle-card/vehicle-card";
import {SectionContainer, CaravansListWrapper, ShowMoreButton} from "./styles";
import NoResults from "../no-results/no-results";

const MIN_COUNT_ITEMS = 5;
const CARDS_COUNT_PER_STEP = 6;

function VehiclesList({ vehicles }) {
    const [numberOfShownVehicles, setNumberOfShownVehicles] = useState(6);

    const showMore = () => {
        if (numberOfShownVehicles + CARDS_COUNT_PER_STEP <= vehicles.length) {
            setNumberOfShownVehicles(numberOfShownVehicles + CARDS_COUNT_PER_STEP);
        } else {
            setNumberOfShownVehicles(vehicles.length)
        }
    }

    const itemsToShow = useMemo(() => {
        return vehicles
            .slice(0, numberOfShownVehicles)
            .map((vehicle, index) =>
                <VehicleCard
                    vehicle={vehicle}
                    key={vehicle.name + index}>{vehicle.name}
                </VehicleCard>);
    }, [vehicles, numberOfShownVehicles]);

    return (
        <SectionContainer>
            <CaravansListWrapper>
                {itemsToShow.length
                    ? itemsToShow
                    : <NoResults/>}
            </CaravansListWrapper>

            {vehicles.length > MIN_COUNT_ITEMS && vehicles.length > numberOfShownVehicles  ?
                <ShowMoreButton
                    type="button"
                    onClick={showMore}
                >
                    Načíst další
                </ShowMoreButton> : null
            }


        </SectionContainer>
    )
}

export default VehiclesList;