import { isValidAchievementItem } from './isValidAchievementItem.js';


describe ('Tikriname parametrus', () => {
    test ('Nevalidu, kai duodama be parametru', () => {
        const achievement = new Achievements();
        expect(isValidAchievementItem()).toBeFalsy();
    })
})