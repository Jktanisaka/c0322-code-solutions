select count("countryId") as "cityCount",
        "countries"."name" as "countryName"
from  "countries"
join "cities" using ("countryId")
group by "countries"."name"
