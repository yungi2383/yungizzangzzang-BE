import { BullRootModuleOptions, SharedBullConfigurationFactory } from '@nestjs/bull';
export declare class BullConfigProvider implements SharedBullConfigurationFactory {
    createSharedConfiguration(): BullRootModuleOptions;
}
