import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FilmStripRegularProps = Omit<IconBaseProps, 'children'>;

const FilmStripRegular = memo(
  forwardRef<SVGSVGElement, FilmStripRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="film-strip" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.53 2.25q1.01-.01 1.7.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v8.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.69.05-1.7.04H7.47q-1.01.01-1.7-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.68-.05 1.7-.04h9.06m-8.28 18h7.5v-7.5h-7.5zm-4.5-3q0 .5.04.86c.04.45.1.71.2.91q.35.65.99.98c.2.1.46.17.91.21l.86.04v-3zm13.5 0v3q.5 0 .86-.04c.45-.04.71-.1.91-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91l.04-.86zm0-1.5h3v-3h-3zm-13.5 0h3v-3h-3zm0-4.5h3v-3h-3zm4.5 0h7.5v-7.5h-7.5zm9 0h3v-3h-3zm-10.5-7.5q-.5 0-.86.04c-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91l-.04.86h3zm10.5 3h3q0-.5-.04-.86a2 2 0 0 0-.2-.91 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21l-.86-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

FilmStripRegular.displayName = 'FilmStripRegular';

// Triple export pattern (lucide-react style)
export { FilmStripRegular, FilmStripRegular as FilmStripRegularIcon, FilmStripRegular as SiFilmStripRegular };
export default FilmStripRegular;
export type { FilmStripRegularProps };
