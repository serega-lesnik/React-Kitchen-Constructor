import { COLOR_VARIANTS } from '../../constants';

import colorWarm from '../../images/img-color/color-1.jpg';
import colorDays from '../../images/img-color/color-2.jpg';
import colorCold from '../../images/img-color/color-3.jpg';

import imgWarm1 from '../../images/img-color/Slider/warm/photo-1.jpg';
import imgDay1 from '../../images/img-color/Slider/day/photo-1.jpg';
import imgCold1 from '../../images/img-color/Slider/cold/photo-1.jpg';

const {
	COLOR_WARM,
	COLOR_DAYS,
	COLOR_COLD
} = COLOR_VARIANTS;

export const COLORS = [
	{
		value: COLOR_WARM,
		label: 'Теплый',
		image: colorWarm,
	},
	{
		value: COLOR_DAYS,
		label: 'Дневной',
		image: colorDays,
	},
	{
		value: COLOR_COLD,
		label: 'Холодный',
		image: colorCold,
	},
];

export const IMAGE_VARIANS = {
	[COLOR_WARM]: [ imgWarm1 ],
	[COLOR_DAYS]: [ imgDay1 ],
	[COLOR_COLD]: [ imgCold1 ],
};

export const DESCRIPTIONS = [
	{
		label: 'Класс',
		value: 'Standart',
		isBtn: true,
	},
	{
		label: 'Потребляемая мощность',
		value: '59 Вт.',
	},
	{
		label: 'Сила света',
		value: '3459 Люмен = 7,5 ламп накаливания по 40 Вт.',
	},
	{
		label: 'Гарантия',
		value: '3 года',
	},
	{
		label: 'Монтаж',
		value: 'Да',
	},
	{
		label: 'Итого сумма',
		value: '2594 рублей',
	},
];
