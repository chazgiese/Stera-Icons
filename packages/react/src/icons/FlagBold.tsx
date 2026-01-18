import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlagBoldProps = Omit<IconBaseProps, 'children'>;

const FlagBold = memo(
  forwardRef<SVGSVGElement, FlagBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.8 2.04c1.69-.15 2.9-.06 3.9.19.99.24 1.7.63 2.33.96.62.33 1.2.62 2.03.81.84.2 2 .32 3.77.2A2.03 2.03 0 0 1 20 6.23v7.92c0 1.02-.78 1.9-1.82 1.98-2.05.15-3.5.04-4.63-.23-1.14-.27-1.92-.7-2.59-1.05a7 7 0 0 0-2.02-.8c-.68-.14-1.6-.2-2.94-.09V21a1 1 0 1 1-2 0V4c0-1 .76-1.88 1.8-1.97m3.42 2.13A10 10 0 0 0 6 4.03v7.92a12 12 0 0 1 3.34.13c1.12.22 1.89.63 2.56 1 .67.35 1.25.66 2.12.87s2.09.32 3.98.17v-7.9l-.05-.02c-1.9.12-3.27 0-4.35-.25a10 10 0 0 1-2.5-.99c-.65-.34-1.16-.61-1.88-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

FlagBold.displayName = 'FlagBold';

// Triple export pattern (lucide-react style)
export { FlagBold, FlagBold as FlagBoldIcon, FlagBold as SiFlagBold };
export type { FlagBoldProps };
