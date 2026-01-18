import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CandleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CandleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.41 10a3.85 3.85 0 0 0 5.18 0q.33 0 .6.03c.4.03.8.1 1.17.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v4.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-3.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-4.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3zm.79 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v4.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h3.6c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23v-4.6c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09l-.5-.02H10.2" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.42 1.19a1 1 0 0 1 1.24.05v.02l.04.02.47.45c.3.3.7.72 1.1 1.22a10 10 0 0 1 1.15 1.72c.32.63.58 1.36.58 2.13a4.1 4.1 0 0 1-4 4.2 4.1 4.1 0 0 1-4-4.2c0-.77.26-1.5.58-2.13a10 10 0 0 1 1.14-1.72 15 15 0 0 1 1.58-1.67l.03-.02.01-.01zm.58 2.2q-.34.34-.72.82-.54.65-.92 1.37Q10 6.29 10 6.8c0 1.28.96 2.2 2 2.2s2-.92 2-2.2q0-.5-.36-1.22a8 8 0 0 0-.92-1.37q-.38-.48-.72-.82" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleBoldDuotone.displayName = 'CandleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CandleBoldDuotone, CandleBoldDuotone as CandleBoldDuotoneIcon, CandleBoldDuotone as SiCandleBoldDuotone };
export type { CandleBoldDuotoneProps };
