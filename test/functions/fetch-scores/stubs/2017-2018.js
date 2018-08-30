/*
 * These were all ranked as good games in 2017-2018 by reddit & blogs
 *
 * https://fansided.com/2018/04/09/5-best-games-2017-18-nba-season/2/
 * https://www.reddit.com/r/nba/comments/7y0g5s/top_10_best_gamesfinishes_of_the_20172018_nba/
 */

let games = {}

/*
 * Timberwolves over Thunder, Oct. 22
 * A game winning 3 to win by 2, right after a 3 by the other team to go up 1
 *
 * https://www.worthawatch.today/?date=20171022
 */

games.MINOKC_20171022 = {'event_id': '20171022-minnesota-timberwolves-at-oklahoma-city-thunder', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-10-22T19:00:00-04:00', 'season_type': 'regular', 'away_team': {'team_id': 'minnesota-timberwolves', 'abbreviation': 'MIN', 'active': true, 'first_name': 'Minnesota', 'last_name': 'Timberwolves', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Target Center', 'city': 'Minneapolis', 'state': 'Minnesota', 'full_name': 'Minnesota Timberwolves'}, 'home_team': {'team_id': 'oklahoma-city-thunder', 'abbreviation': 'OKC', 'active': true, 'first_name': 'Oklahoma City', 'last_name': 'Thunder', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma', 'full_name': 'Oklahoma City Thunder'}, 'site': {'capacity': 19599, 'surface': 'Hardwood', 'name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma'}, 'away_period_scores': [28, 33, 27, 27], 'home_period_scores': [23, 31, 21, 38], 'away_points_scored': 115, 'home_points_scored': 113}

/*
 * Thunder over 76ers, Dec. 15
 * 3OT, won by 2, huge triple double for russ
 *
 * https://www.worthawatch.today/?date=20171215
 */

games.OKCPHI_20171215 = {'event_id': '20171215-oklahoma-city-thunder-at-philadelphia-76ers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-15T19:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'oklahoma-city-thunder', 'abbreviation': 'OKC', 'active': true, 'first_name': 'Oklahoma City', 'last_name': 'Thunder', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma', 'full_name': 'Oklahoma City Thunder'}, 'home_team': {'team_id': 'philadelphia-76ers', 'abbreviation': 'PHI', 'active': true, 'first_name': 'Philadelphia', 'last_name': '76ers', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania', 'full_name': 'Philadelphia 76ers'}, 'site': {'capacity': 20318, 'surface': 'Hardwood', 'name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania'}, 'away_period_scores': [28, 27, 26, 13, 8, 9, 8], 'home_period_scores': [23, 24, 30, 17, 8, 9, 6], 'away_points_scored': 119, 'home_points_scored': 117}

/*
 * Lakers over 76ers, Dec. 7
 * Won by 3. Simmons triple double. Lots of young players / rookies.
 *
 * https://www.worthawatch.today/?date=20171207
 */

games.LALPHI_20171207 = {'event_id': '20171207-los-angeles-lakers-at-philadelphia-76ers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-07T20:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'los-angeles-lakers', 'abbreviation': 'LAL', 'active': true, 'first_name': 'Los Angeles', 'last_name': 'Lakers', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California', 'full_name': 'Los Angeles Lakers'}, 'home_team': {'team_id': 'philadelphia-76ers', 'abbreviation': 'PHI', 'active': true, 'first_name': 'Philadelphia', 'last_name': '76ers', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania', 'full_name': 'Philadelphia 76ers'}, 'site': {'capacity': 20318, 'surface': 'Hardwood', 'name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania'}, 'away_period_scores': [32, 25, 22, 28], 'home_period_scores': [25, 24, 21, 34], 'away_points_scored': 107, 'home_points_scored': 104}

/*
 * Celtics over Rockets, Dec. 28
 * Celtics down by 26, won by 1. 2 of the best teams in the league.
 *
 * https://www.worthawatch.today/?date=20171228
 */

games.BOSHOU_20171228 = {'event_id': '20171228-houston-rockets-at-boston-celtics', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-28T20:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'houston-rockets', 'abbreviation': 'HOU', 'active': true, 'first_name': 'Houston', 'last_name': 'Rockets', 'conference': 'West', 'division': 'Southwest', 'site_name': 'Toyota Center', 'city': 'Houston', 'state': 'Texas', 'full_name': 'Houston Rockets'}, 'home_team': {'team_id': 'boston-celtics', 'abbreviation': 'BOS', 'active': true, 'first_name': 'Boston', 'last_name': 'Celtics', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'TD Garden', 'city': 'Boston', 'state': 'Massachusetts', 'full_name': 'Boston Celtics'}, 'site': {'capacity': 18624, 'surface': 'Hardwood', 'name': 'TD Garden', 'city': 'Boston', 'state': 'Massachusetts'}, 'away_period_scores': [32, 30, 16, 20], 'home_period_scores': [12, 26, 31, 30], 'away_points_scored': 98, 'home_points_scored': 99}

/*
 * Rockets over Warriors, Jan. 20
 * Rockets win by 8. Top 2 teams in the league. By all accounts a very good game,
 * but hard to rate just with stats?
 *
 * https://www.worthawatch.today/?date=20180120
 */

games.GSWHOU_20180120 = {'event_id': '20180120-golden-state-warriors-at-houston-rockets', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-01-20T20:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'home_team': {'team_id': 'houston-rockets', 'abbreviation': 'HOU', 'active': true, 'first_name': 'Houston', 'last_name': 'Rockets', 'conference': 'West', 'division': 'Southwest', 'site_name': 'Toyota Center', 'city': 'Houston', 'state': 'Texas', 'full_name': 'Houston Rockets'}, 'site': {'capacity': 18300, 'surface': 'Hardwood', 'name': 'Toyota Center', 'city': 'Houston', 'state': 'Texas'}, 'away_period_scores': [28, 30, 33, 17], 'home_period_scores': [40, 25, 27, 24], 'away_points_scored': 108, 'home_points_scored': 116}

/*
 * Bos vs GSW
 * GSW win by 4
 * Point guard duel: curry 49, kyrie 37
 * Curry scores 13 in final 1:42
 *
 * https://www.worthawatch.today/?date=20180127
 */

games.GSWBOS_20180127 = {'event_id': '20180127-boston-celtics-at-golden-state-warriors', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-01-27T20:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'boston-celtics', 'abbreviation': 'BOS', 'active': true, 'first_name': 'Boston', 'last_name': 'Celtics', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'TD Garden', 'city': 'Boston', 'state': 'Massachusetts', 'full_name': 'Boston Celtics'}, 'home_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'site': {'capacity': 19596, 'surface': 'Hardwood', 'name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California'}, 'away_period_scores': [37, 17, 19, 32], 'home_period_scores': [27, 23, 30, 29], 'away_points_scored': 105, 'home_points_scored': 109}

/*
 * Nuggets Thunder
 * Gary harris game winning 3
 *
 * https://www.worthawatch.today/?date=20180201
 */

games.OKCDEN_20180201 = {'event_id': '20180201-oklahoma-city-thunder-at-denver-nuggets', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-02-01T22:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'oklahoma-city-thunder', 'abbreviation': 'OKC', 'active': true, 'first_name': 'Oklahoma City', 'last_name': 'Thunder', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma', 'full_name': 'Oklahoma City Thunder'}, 'home_team': {'team_id': 'denver-nuggets', 'abbreviation': 'DEN', 'active': true, 'first_name': 'Denver', 'last_name': 'Nuggets', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Pepsi Center', 'city': 'Denver', 'state': 'Colorado', 'full_name': 'Denver Nuggets'}, 'site': {'capacity': 19099, 'surface': 'Hardwood', 'name': 'Pepsi Center', 'city': 'Denver', 'state': 'Colorado'}, 'away_period_scores': [33, 24, 32, 35], 'home_period_scores': [40, 32, 32, 23], 'away_points_scored': 124, 'home_points_scored': 127}

/* Cavs Timberwolves
 * Cavs win by 2 in OT
 * Lebron block & buzzer beater
 *
 * https://www.worthawatch.today/?date=20180207
 */

games.CLEMIN_20180207 = {'event_id': '20180207-minnesota-timberwolves-at-cleveland-cavaliers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-02-07T20:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'minnesota-timberwolves', 'abbreviation': 'MIN', 'active': true, 'first_name': 'Minnesota', 'last_name': 'Timberwolves', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Target Center', 'city': 'Minneapolis', 'state': 'Minnesota', 'full_name': 'Minnesota Timberwolves'}, 'home_team': {'team_id': 'cleveland-cavaliers', 'abbreviation': 'CLE', 'active': true, 'first_name': 'Cleveland', 'last_name': 'Cavaliers', 'conference': 'East', 'division': 'Central', 'site_name': 'Quicken Loans Arena', 'city': 'Cleveland', 'state': 'Ohio', 'full_name': 'Cleveland Cavaliers'}, 'site': {'capacity': 20562, 'surface': 'Hardwood', 'name': 'Quicken Loans Arena', 'city': 'Cleveland', 'state': 'Ohio'}, 'away_period_scores': [29, 37, 33, 30, 9], 'home_period_scores': [31, 33, 37, 28, 11], 'away_points_scored': 138, 'home_points_scored': 140}

/* Raptors Bucks
 * Raptors win by 4 in OT
 * Derozan has 52
 *
 * https://www.worthawatch.today/?date=20180101
 */

games.TORMIL_20180101 = {'event_id': '20180101-milwaukee-bucks-at-toronto-raptors', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-01-01T19:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'milwaukee-bucks', 'abbreviation': 'MIL', 'active': true, 'first_name': 'Milwaukee', 'last_name': 'Bucks', 'conference': 'East', 'division': 'Central', 'site_name': 'BMO Harris Bradley Center', 'city': 'Milwaukee', 'state': 'Wisconsin', 'full_name': 'Milwaukee Bucks'}, 'home_team': {'team_id': 'toronto-raptors', 'abbreviation': 'TOR', 'active': true, 'first_name': 'Toronto', 'last_name': 'Raptors', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'Air Canada Centre', 'city': 'Toronto', 'state': 'Ontario', 'full_name': 'Toronto Raptors'}, 'site': {'capacity': 19800, 'surface': 'Hardwood', 'name': 'Air Canada Centre', 'city': 'Toronto', 'state': 'Ontario'}, 'away_period_scores': [30, 26, 28, 30, 13], 'home_period_scores': [35, 25, 28, 26, 17], 'away_points_scored': 127, 'home_points_scored': 131}

/* Cavs Wizards
 * Cavs win by 8 but Lebron has 57
 *
 * https://www.worthawatch.today/?date=20171103
 */

games.CLEWAS_20171103 = {'event_id': '20171103-cleveland-cavaliers-at-washington-wizards', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-11-03T19:00:00-04:00', 'season_type': 'regular', 'away_team': {'team_id': 'cleveland-cavaliers', 'abbreviation': 'CLE', 'active': true, 'first_name': 'Cleveland', 'last_name': 'Cavaliers', 'conference': 'East', 'division': 'Central', 'site_name': 'Quicken Loans Arena', 'city': 'Cleveland', 'state': 'Ohio', 'full_name': 'Cleveland Cavaliers'}, 'home_team': {'team_id': 'washington-wizards', 'abbreviation': 'WAS', 'active': true, 'first_name': 'Washington', 'last_name': 'Wizards', 'conference': 'East', 'division': 'Southeast', 'site_name': 'Verizon Center', 'city': 'Washington', 'state': 'District of Columbia', 'full_name': 'Washington Wizards'}, 'site': {'capacity': 20173, 'surface': 'Hardwood', 'name': 'Verizon Center', 'city': 'Washington', 'state': 'District of Columbia'}, 'away_period_scores': [42, 32, 30, 26], 'home_period_scores': [36, 30, 27, 29], 'away_points_scored': 130, 'home_points_scored': 122}

/* Lakers Warriors
 * 2 point OT win for GSW. Buzzer beater and game saving block
 *
 * https://www.worthawatch.today/?date=20171218
 */

games.LALGSW_20171218 = {'event_id': '20171218-golden-state-warriors-at-los-angeles-lakers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-18T22:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'home_team': {'team_id': 'los-angeles-lakers', 'abbreviation': 'LAL', 'active': true, 'first_name': 'Los Angeles', 'last_name': 'Lakers', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California', 'full_name': 'Los Angeles Lakers'}, 'site': {'capacity': 18997, 'surface': 'Hardwood', 'name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California'}, 'away_period_scores': [32, 25, 26, 19, 14], 'home_period_scores': [24, 29, 29, 20, 12], 'away_points_scored': 116, 'home_points_scored': 114}

/* Lakers Warriors
 * 4 point OT win for GSW.
 * Steph scores 13 in OT
 *
 * https://www.worthawatch.today/?date=20171129
 */

games.LALGSW_20171129 = {'event_id': '20171129-golden-state-warriors-at-los-angeles-lakers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-11-29T22:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'home_team': {'team_id': 'los-angeles-lakers', 'abbreviation': 'LAL', 'active': true, 'first_name': 'Los Angeles', 'last_name': 'Lakers', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California', 'full_name': 'Los Angeles Lakers'}, 'site': {'capacity': 18997, 'surface': 'Hardwood', 'name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California'}, 'away_period_scores': [30, 20, 34, 25, 18], 'home_period_scores': [20, 34, 30, 25, 14], 'away_points_scored': 127, 'home_points_scored': 123}

module.exports = games
