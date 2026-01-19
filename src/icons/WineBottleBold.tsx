import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineBottleBoldProps = Omit<IconBaseProps, 'children'>;

const WineBottleBold = memo(
  forwardRef<SVGSVGElement, WineBottleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.5 1c1.24 0 2.25 1 2.25 2.25v4.24l.04.07q.1.11.32.22A3.5 3.5 0 0 1 17.25 11v9a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3v-9c0-1.45.88-2.7 2.14-3.22a1 1 0 0 0 .32-.22q.06-.09.04-.07V3.25c0-1.24 1-2.25 2.25-2.25zm-1 2a.25.25 0 0 0-.25.25V7.5c0 1.15-.93 1.84-1.58 2.12A1.5 1.5 0 0 0 8.75 11v9a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-9a1.5 1.5 0 0 0-.92-1.38c-.65-.28-1.58-.97-1.58-2.12V3.25A.25.25 0 0 0 12.5 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineBottleBold.displayName = 'WineBottleBold';

// Triple export pattern (lucide-react style)
export { WineBottleBold, WineBottleBold as WineBottleBoldIcon, WineBottleBold as SiWineBottleBold };
export type { WineBottleBoldProps };
