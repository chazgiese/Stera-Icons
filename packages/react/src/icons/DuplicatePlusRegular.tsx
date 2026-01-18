import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DuplicatePlusRegularProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusRegular = memo(
  forwardRef<SVGSVGElement, DuplicatePlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.5 10.75c.41 0 .75.34.75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 1 1-1.5 0v-2.25H11.5a.75.75 0 0 1 0-1.5h2.25V11.5c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M11 2.25c1.33 0 2.2-.01 2.9.24a4.3 4.3 0 0 1 2.61 2.6c.2.58.23 1.24.24 2.17q.55 0 1.01.04.93.06 1.67.41c.8.41 1.45 1.06 1.86 1.86q.36.74.41 1.67.06.92.05 2.36v1.8q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05h-1.8q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.04-.45-.04-1.01c-.93 0-1.6-.04-2.16-.24a4.3 4.3 0 0 1-2.61-2.6c-.25-.72-.24-1.58-.24-2.91V8.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.92-.06 2.36-.05zm2.6 6.5c-1 0-1.7 0-2.24.04-.53.05-.86.13-1.1.26q-.8.4-1.21 1.2c-.13.25-.21.58-.26 1.11a31 31 0 0 0-.04 2.24v1.8c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.25.55.05 1.25.05 2.24.05h1.8c1 0 1.7 0 2.24-.05a3 3 0 0 0 1.1-.25q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24v-1.8c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04zm-5-5c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2c-.13.25-.21.58-.26 1.11-.04.55-.04 1.25-.04 2.24V11c0 1.46.01 2 .15 2.4.28.8.9 1.42 1.7 1.7.32.11.74.14 1.65.15V13.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86q.74-.36 1.67-.41.93-.06 2.36-.05h1.65c-.01-.91-.04-1.33-.15-1.66a2.8 2.8 0 0 0-1.7-1.69c-.4-.14-.94-.15-2.4-.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

DuplicatePlusRegular.displayName = 'DuplicatePlusRegular';

// Triple export pattern (lucide-react style)
export { DuplicatePlusRegular, DuplicatePlusRegular as DuplicatePlusRegularIcon, DuplicatePlusRegular as SiDuplicatePlusRegular };
export type { DuplicatePlusRegularProps };
