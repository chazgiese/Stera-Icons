import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderPlusRegularProps = Omit<IconBaseProps, 'children'>;

const FolderPlusRegular = memo(
  forwardRef<SVGSVGElement, FolderPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-plus" {...props}>
      <path fill="currentColor" d="M18 13.25c.4 0 .75.34.75.75v2.25H21a.75.75 0 0 1 0 1.5h-2.25V20a.75.75 0 0 1-1.5 0v-2.25H15a.75.75 0 0 1 0-1.5h2.25V14c0-.41.33-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M9.17 3.75c.46 0 .8 0 1.14.08q.42.09.8.33c.3.18.54.43.86.75l.12.12c.37.37.48.47.59.54q.16.1.36.15c.12.03.26.03.79.03h3.47q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v.8c0 .41-.34.75-.75.75H4.25v3.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04H12a.75.75 0 0 1 0 1.5H8.3q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-7q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM6.7 5.25q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.05h15.5V9.7q0-.84-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02h-3.47c-.46 0-.8 0-1.14-.08a3 3 0 0 1-.8-.33c-.3-.18-.54-.43-.86-.75l-.12-.12a4 4 0 0 0-.59-.54 1 1 0 0 0-.36-.15 4 4 0 0 0-.79-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderPlusRegular.displayName = 'FolderPlusRegular';

// Triple export pattern (lucide-react style)
export { FolderPlusRegular, FolderPlusRegular as FolderPlusRegularIcon, FolderPlusRegular as SiFolderPlusRegular };
export default FolderPlusRegular;
export type { FolderPlusRegularProps };
