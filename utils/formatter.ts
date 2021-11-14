import { pokemonTypeColor } from './constant';

export const getFormattedId = (id: number) => {
  return id ? `#${id.toString().padStart(3, '0')}` : '';
};

export const getPokemonTypeColor = (pokemonType: string[]) => {
  if (pokemonType) {
    const typeColor = pokemonTypeColor.filter(({ type }: any) =>
      pokemonType.includes(type)
    );

    return typeColor;
  }
  return [];
};

export const formattedName = (name: string) => {
  const updatedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

  return updatedName;
};
