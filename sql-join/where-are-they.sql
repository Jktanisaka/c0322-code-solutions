select "line1",
        "cities"."name" as "cityName",
        "district"
from "addresses"
join "cities" using ("cityId")
