select count("actorId") as "genreCount",
        "genres"."name" as "genreName"
from  "genres"
join "filmGenre" using ("genreId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actorId" = 178
group by "genres"."genreId"
