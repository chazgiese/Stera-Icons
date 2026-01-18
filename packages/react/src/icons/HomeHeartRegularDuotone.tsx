import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeHeartRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeHeartRegularDuotone = memo(
  forwardRef<SVGSVGElement, HomeHeartRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.7 2.84a3.75 3.75 0 0 1 4.6 0l6 4.67c.92.7 1.45 1.8 1.45 2.96V18A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18v-7.53c0-1.16.53-2.25 1.45-2.96zm3.68 1.18a2.25 2.25 0 0 0-2.76 0l-6 4.67a2.3 2.3 0 0 0-.87 1.78V18c0 1.24 1 2.25 2.25 2.25h12c1.24 0 2.25-1 2.25-2.25v-7.53c0-.7-.32-1.35-.87-1.78z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.9 9.25a2.84 2.84 0 0 1 2.85 2.83c0 1.15-.62 2.03-.83 2.31-1.03 1.43-2.47 2.42-3.45 3.2a.75.75 0 0 1-.94 0c-.98-.78-2.42-1.77-3.45-3.2a4 4 0 0 1-.83-2.31A2.84 2.84 0 0 1 12 9.98c.5-.45 1.17-.73 1.9-.73m0 1.5c-.54 0-1 .32-1.22.78a.75.75 0 0 1-1.36 0 1.4 1.4 0 0 0-1.22-.78c-.75 0-1.35.6-1.35 1.33 0 .64.36 1.17.54 1.44.76 1.04 1.75 1.79 2.71 2.53.89-.69 1.8-1.38 2.54-2.31l.16-.22c.2-.27.55-.8.55-1.44 0-.73-.6-1.33-1.35-1.33" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeHeartRegularDuotone.displayName = 'HomeHeartRegularDuotone';

// Triple export pattern (lucide-react style)
export { HomeHeartRegularDuotone, HomeHeartRegularDuotone as HomeHeartRegularDuotoneIcon, HomeHeartRegularDuotone as SiHomeHeartRegularDuotone };
export type { HomeHeartRegularDuotoneProps };
