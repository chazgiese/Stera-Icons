import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, FolderPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 4.75c-.69 0-1.25.56-1.25 1.25v4.25H2a.75.75 0 0 0-.75.75V6A2.75 2.75 0 0 1 4 3.25h4.93c.92 0 1.78.46 2.29 1.22l.81 1.22c.23.35.62.56 1.04.56H20A2.75 2.75 0 0 1 22.75 9v2a.75.75 0 0 0-.75-.75h-.75V9c0-.69-.56-1.25-1.25-1.25h-6.93c-.92 0-1.78-.46-2.29-1.22L9.97 5.3a1.3 1.3 0 0 0-1.04-.56zM19 14.25c.4 0 .75.34.75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V21a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V15c0-.41.33-.75.75-.75" />
        <path fill="currentColor" d="M22 10.25a.75.75 0 0 1 0 1.5H2.75V17c0 1.24 1 2.25 2.25 2.25h7a.75.75 0 0 1 0 1.5H5A3.75 3.75 0 0 1 1.25 17v-6c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

FolderPlusRegularDuotone.displayName = 'FolderPlusRegularDuotone';

export { FolderPlusRegularDuotone };
export type { FolderPlusRegularDuotoneProps };
